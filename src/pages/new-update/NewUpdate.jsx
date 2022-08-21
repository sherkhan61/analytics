import React, {useEffect, useState} from "react";
import {
    doc,
    serverTimestamp,
    setDoc,
    updateDoc,
    getDoc
} from "firebase/firestore";
import {auth, db, storage} from "../../firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {useNavigate, useParams} from "react-router-dom";
import "./newUpdate.scss";
import noAvatar from "../../assets/images/photos/noAvatar.jpg";
import LayoutComponent from "../../ui/layout/LayoutComponent";
import {CloudUploadOutlined} from "@ant-design/icons";


const initialState = {
    username: "",
    password: "",
    displayName: "",
    position: "",
    typeWork: "",
    office: "",
    email: "",
    mobile: "",
    work: "",
    status: ""
}

const NewUpdate = () => {
        const [file, setFile] = useState("");
        const [user, setUser] = useState(initialState);
        const {username, password, displayName, position, typeWork, office, email, mobile, work, status} = user;
        const [per, setPerc] = useState(null);
        const navigate = useNavigate();
        const {id} = useParams();

        useEffect(() => {
            const getSingleUser = async () => {
                const docRef = doc(db, "users", id);
                const snapshot = await getDoc(docRef);
                if (snapshot.exists()) {
                    setUser({...snapshot.data()});
                }
            }
            getSingleUser();
        }, [id])
        /*useEffect(() => {
            id && getSingleUser();
        }, [id])

        const getSingleUser = async () => {
            const docRef = doc(db, "users", id);
            const snapshot = await getDoc(docRef);
            if (snapshot.exists()) {
                setUser({...snapshot.data()});
            } else {
                setUser({});
            }
        }*/


        useEffect(() => {
            const uploadFile = () => {
                const name = new Date().getTime() + file.name;

                console.log(name);
                const storageRef = ref(storage, file.name);
                const uploadTask = uploadBytesResumable(storageRef, file);

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress =
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log("Upload is " + progress + "% done");
                        setPerc(progress);
                        switch (snapshot.state) {
                            case "paused":
                                console.log("Upload is paused");
                                break;
                            case "running":
                                console.log("Upload is running");
                                break;
                            default:
                                break;
                        }
                    },
                    (error) => {
                        console.log(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            setUser((prev) => ({...prev, img: downloadURL}));
                        });
                    }
                );
            };
            file && uploadFile();
        }, [file]);

        console.log(user);

        const handleInput = (e) => {
            const name = e.target.name;
            const value = e.target.value;

            setUser({...user, [name]: value});
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (!id) {
                try {
                    const res = await createUserWithEmailAndPassword(
                        auth,
                        user.email,
                        user.password
                    );
                    await setDoc(doc(db, "users", res.user.uid), {
                        ...user,
                        timeStamp: serverTimestamp(),
                    });
                } catch
                    (err) {
                    console.log(err);
                }
            } else {
                try {
                    await updateDoc(doc(db, "users", id), {
                        ...user,
                        timeStamp: serverTimestamp(),
                    });
                } catch (error) {
                    console.log(error)
                }
            }
            navigate(-1)
        }

        return (
            <LayoutComponent>
                <div className="new">
                    <div className="newContainer">
                        <div className="top">
                            <h1>{id ? "Обновить данные специалиста" : "Добавить нового специалиста в команду"}</h1>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <img
                                    src={
                                        file
                                            ? URL.createObjectURL(file)
                                            : noAvatar
                                    }
                                    alt="avatar"
                                />
                                <div className="formInput" onSubmit={handleSubmit}>
                                    <label htmlFor="file">
                                        Добавить фото: <CloudUploadOutlined className="icon" />
                                    </label>
                                    <input
                                        id="file"
                                        type="file"
                                        name="file"
                                        onChange={(e) => setFile(e.target.files[0])}
                                        style={{display: "none"}}
                                    />
                                </div>
                            </div>
                            <div className="right">
                                <form onSubmit={handleSubmit}>
                                    <div className="formInput">
                                        <label>Имя пользователя</label>
                                        <input
                                            name="username"
                                            type="text"
                                            placeholder="Akhmet.Akhmetov"
                                            onChange={handleInput}
                                            value={username}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Пароль</label>
                                        <input
                                            name="password"
                                            type="password"
                                            placeholder="пароль"
                                            onChange={handleInput}
                                            value={password}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>ФИО</label>
                                        <input
                                            name="displayName"
                                            type="text"
                                            placeholder="Ахмет Ахметов"
                                            onChange={handleInput}
                                            value={displayName}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Должность</label>
                                        <input
                                            name="position"
                                            type="text"
                                            placeholder="главный специалист"
                                            onChange={handleInput}
                                            value={position}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Вид испытания</label>
                                        <input
                                            name="typeWork"
                                            type="text"
                                            placeholder="АИК, ФИБ, ОСИ, ОПОИБ, Нагрузка"
                                            onChange={handleInput}
                                            value={typeWork}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Кабинет</label>
                                        <input
                                            name="office"
                                            type="text"
                                            placeholder="315"
                                            onChange={handleInput}
                                            value={office}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Почта</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Akhmet.Akhmetov@sts.kz"
                                            onChange={handleInput}
                                            value={email}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Мобильный номер</label>
                                        <input
                                            name="mobile"
                                            type="text"
                                            placeholder="87774441122"
                                            onChange={handleInput}
                                            value={mobile}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Рабочий номер</label>
                                        <input
                                            name="work"
                                            type="text"
                                            placeholder="620"
                                            onChange={handleInput}
                                            value={work}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Статус</label>
                                        <input
                                            name="status"
                                            type="text"
                                            onChange={handleInput}
                                            value={status}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <button disabled={per !== null && per < 100} type="submit">
                                        {id ? "Обновить" : "Сохранить"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutComponent>
        );
    }
;

export default NewUpdate;
