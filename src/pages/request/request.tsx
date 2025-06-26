import { useEffect, useState } from "react";
import { type User, UserApi } from "../../api/UserApi.ts";

const Request = () => {

    const [user, setUser] = useState<User[]>([]);
    useEffect( () => {
        getUsers().then(res => console.log(res));
    }, []);

    const getUsers = async () => {
        try {
            const res = await UserApi.get()
            setUser(res)
        } catch (e) {
            console.error(e)
        }
    }

    if (!user) return <div>Нет данных</div>

    return (
        <div>
            {user.map((item) => (
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.email}</p>
                </div>
            ))}
        </div>
    );
};

export default Request;