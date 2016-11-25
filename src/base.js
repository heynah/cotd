import Rebase from 're-base'

//establish connection to Firebase
const base = Rebase.createClass({
    apiKey: "AIzaSyBo1wUTzSb2sEcdfcAoh95lRC2aoUmg9kg",
    authDomain: "cotd-ec1b1.firebaseapp.com",
    databaseURL: "https://cotd-ec1b1.firebaseio.com",
})

export default base;