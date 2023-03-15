import React from 'react';
import {useSelector} from 'react-redux'
import './style.css';

export const Profile = () =>{
    //отображаем данные из store. Передаем в useSelector callback, в него state и state возвращает профиль и
    //кладем это все в обьект profile, к которому обращаемся дальше
    const {profile} = useSelector((state)=> state.profile);

    //делаем проверку на наличие данных вне JSX
    const profileName = !!profile && !!profile.name && profile.name.length > 0 ? profile.name : 'Name not found';
    const profileLastName = !!profile && !!profile.lastname && profile.lastname.length > 0 ? profile.lastname : 'Lastname not found';

    return (
            <div className="profile">
                {!!profile ? (
                    <div>
                        <h3>{profileName} {profileLastName}</h3>
                    </div>
                ) : <h1>No data</h1>}
            </div>
    )
}
