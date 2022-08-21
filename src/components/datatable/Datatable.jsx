import "./datatable.scss";
import {DataGrid} from "@mui/x-data-grid";
import {userColumns} from "../../datatablesource";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {collection, deleteDoc, doc, onSnapshot,} from "firebase/firestore";
import {db} from "../../firebase";
import PreviewIcon from '@mui/icons-material/Preview';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {Tooltip} from "@mui/material";

const Datatable = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        // LISTEN (REALTIME)
        const unsub = onSnapshot(
            collection(db, "users"),
            (snapShot) => {
                let list = [];
                snapShot.docs.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setUsers(list);
            },
            (error) => {
                console.log(error);
            }
        );

        return () => {
            unsub();
        };
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "users", id));
            setUsers(users.filter((item) => item.id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    console.log(users)

    const actionColumn = [
        {
            field: "action",
            headerName: "Действия",
            width: 160,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`profile/${params.row.id}`} style={{ textDecoration: "none" }}>
                            <button className="viewButton">
                                <Tooltip title="Посмотреть">
                                    <PreviewIcon />
                                </Tooltip>
                            </button>
                        </Link>
                        <Link to={`update/${params.row.id}`} style={{ textDecoration: "none" }}>
                            <button className="updateButton">
                                <Tooltip title="Обновить">
                                    <EditIcon />
                                </Tooltip>
                            </button>
                        </Link>
                        <button
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}>
                            <Tooltip title="Удалить">
                                <DeleteIcon />
                            </Tooltip>
                        </button>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Добавить нового специалиста в команду
                <Link to="/users/new">
                    <button className="addButton">
                        <Tooltip title="Добавить">
                            <PersonAddIcon />
                        </Tooltip>
                    </button>
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={users}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;
