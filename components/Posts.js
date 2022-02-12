import Post from "./Post";

const posts = [
    {
        id: '123',
        username: 'vibemane333',
        userImg: 'https://media.istockphoto.com/photos/shot-of-a-handsome-young-man-standing-against-a-grey-background-picture-id1335941252?s=612x612',
        img: 'https://links.papareact.com/3ke',
        caption: 'This is dope',
    },
    {
        id: '123',
        username: 'vibemane333',
        userImg: 'https://media.istockphoto.com/photos/shot-of-a-handsome-young-man-standing-against-a-grey-background-picture-id1335941252?s=612x612',
        img: 'https://links.papareact.com/3ke',
        caption: 'This is dope',
    },
];

function Posts() {
  return (
    <div>
        {posts.map((post) => (
            <Post 
            key={post.id} 
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}            
            />
        ))}
    </div>
  );
}

export default Posts