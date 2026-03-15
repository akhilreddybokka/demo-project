import { UserInfo } from "./UserInfo";


export const UserCard=(props)=>{
    return(
        <>
        <h2>User Deatils</h2>
        <UserInfo {...props}/>
        </>
    );
};

// export const UserCard=({id,...rest})=>{
//     return(
//         <>
//         <h2>User Deatils</h2>
//         <UserInfo {...rest}/>
//         </>
//     );
// };