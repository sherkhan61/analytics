export const userColumns = [
    {
        field: "displayName",
        headerName: "ФИО",
        width: 280,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.displayName}
                </div>
            );
        },
    },
    {
        field: "position",
        headerName: "Должность",
        width: 240,
    },
    {
        field: "typeWork",
        headerName: "Вид испытаний",
        width: 160,
    },
    {
        field: "office",
        headerName: "Кабинет",
        width: 100,
    },
    {
        field: "status",
        headerName: "Статус",
        width: 140,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

