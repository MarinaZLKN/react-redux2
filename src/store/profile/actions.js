
//хорошая практика содавать префиксы для названия actions, чтобы они не пересекались с другими, если приложение огромное
export const profileActionTypes = {
    SET_PROFILE: 'PROFILE.SET_PROFILE',
    SET_THEME: 'PROFILE.SET_PROFILE'
}


//actions (actionCreator)
export const profileActions = {
    setProfile: (payload) => ({type: profileActionTypes.SET_PROFILE, payload}),
    setTheme: (payload) => ({type: profileActionTypes.SET_THEME, payload})
}

