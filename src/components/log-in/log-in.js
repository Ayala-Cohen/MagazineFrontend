import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import Cookies from 'universal-cookie'
import actions from '../../redux/action'

function LogIn(props) {
    const [displayMagazine, setDisplayMagazine] = useState(false)

    const refToPassword = useRef()
    const refToUserName = useRef()
    const cookies = new Cookies()

    const logIn = () => {
        let userName = refToUserName.current.value
        let password = refToPassword.current.value
        let token = cookies.get('token')
        props.checkAuth({ userName: userName, password: password, token: token })
        if (props.user.user)
            setDisplayMagazine(true)
    }
    if (displayMagazine)
        return <Redirect to='/magazine' />

    return (
        <>
            <div className="container col-10">
                <div style={{ margin: "auto" }}>
                    <div className="form-group mb-3">
                        <label className="form-row">שם משתמש:</label>
                        <input type="email" placeholder="הכנס כתובת אמייל" className="col-12" ref={refToUserName} />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-row">סיסמה:</label>
                        <input type="password" placeholder="הכנס סיסמה" className="col-12" ref={refToPassword} />
                    </div>
                    <button onClick={logIn} className="btn btn-info">התחבר</button><br />
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return { user: state.user }
}

const mapDispatchToProps = (dispatch) => {
    return { checkAuth: (user) => { dispatch(actions.checkAuth(user)) } }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)