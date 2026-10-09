
import { connection } from "next/server";

const CurrentDate = async() => {
    await connection()
    const date = new Date().toLocaleDateString("bn-BD",{
        dateStyle:'full'
    })
    return (
        <span>{date}</span>
    );
};

export default CurrentDate;