function ProfileCard({ title, handle, image }) {
    //Old
    // const title = props.title;
    // const handle = props.handle;

    //New, using object destructuring
    //const { title, handle } = props;

    //Last change is changing the argument from props to the destructured title and handle

    return (
        <div>
            <img src={image} alt="pda logo" />
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
        )
}

export default ProfileCard;