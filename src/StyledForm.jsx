export const StyledForm=()=>{
    return(
        <form class="contact-form">
            <label htmlFor="username">UserName:</label>
            <input type="text" id="username" class="form-input"/>
            <br/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" class="form-input"/>   
        </form>
    );
};