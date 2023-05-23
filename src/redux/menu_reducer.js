const initMsg = { 
    menuName:""
};
export default function menuReducer (preState = initMsg, action) {
    const {type ,data} = action
    switch (type) {
        case "menuChange":
            return data;
        default:
            return preState.menuName;
    }
}