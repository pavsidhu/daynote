import RNFirebase from "react-native-firebase"

const firebase = RNFirebase.initializeApp({
  debug: process.env.NODE_ENV === "development"
})

export default firebase
