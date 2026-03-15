export const UserDetails = ({ name, isOnline }) => {
    if(isOnline){
    return (
        <div>
            <h3>{name}</h3>
            <span>Online</span>
            <p>Available for Chat</p>
            <button>Send Message</button>
        </div>
    );
    }
    return (
        <div>
            <h3>{name}</h3>
            <span>Offline</span>
            <p>Not available for Chat</p>
            <button>Check back later</button>
        </div>
    );
};