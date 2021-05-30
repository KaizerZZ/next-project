import Post from "components/ui/homepage/Post";

const posts = [
  {
    id: 1,
    username: "shirakamifubuki",
    name: "Shirakami Fubuki",
    likes: 100,
    timestamp: "14 Hours ago",
    profpic: "https://pbs.twimg.com/profile_images/1391543185025822720/v2pZA-4h_400x400.jpg",
    postImage: "https://pbs.twimg.com/media/E2QH2nUUUAAI0cs?format=jpg&name=large",
    caption: "地獄反省会＆すこん部の新しい姿考案放送ありがとうございましたああ！！ おかげさまで可愛い皆さんが生まれました！！ 八頭身すこん部もよろしく(^・ω・^§)ﾉ 🌽 #フブキch 絵フブキでも良いけど！ 自分こんな感じってアレンジは #すこん部　も見てるのでこちらでも ✨✨"
  },
  {
    id: 2,
    username: "nakiriayame",
    name: "Nakiri Ayame",
    likes: 250,
    timestamp: "18 Hours ago",
    profpic: "https://pbs.twimg.com/profile_images/1374730291542167556/JZ32XH6n_400x400.jpg",
    postImage: "https://pbs.twimg.com/media/E1_dHnLVIAkXTyu?format=jpg&name=large",
    caption: "みんなグッバイ宣言聴いてくれてありがとう〜〜〜🥳🥳 🌸🌸 よく見ると実はみんなとお揃いのパーカーを着て歌ってるんだ余〜✌️😉👌 沢山聴いてくださぁ〜〜い！🥰 https://youtu.be/z1W4c7ym49Y"
  },
  {
    id: 3,
    username: "ookamimio",
    name: "Ookami Mio",
    likes: 1000,
    timestamp: "1 Day ago",
    profpic: "https://pbs.twimg.com/profile_images/1377457146292436993/pj_erlKH_400x400.jpg",
    postImage: "https://pbs.twimg.com/media/E2KKG1FUcAMPzlW?format=jpg&name=large",
    caption: "深夜のウクレレ放送✨波の音付🌊 24時からウクレレやります🌺 睡眠導入にどうぞ！🥱 放送こちら➡ https://youtu.be/HYgciJ5Z0cQ"
  },
  {
    id: 4,
    username: "watsonameliaEN",
    name: "Amelia Watson",
    likes: 2400,
    timestamp: "2 Days ago",
    profpic: "https://pbs.twimg.com/profile_images/1318958836120649728/7JHxy2UO_400x400.jpg",
    postImage: "https://pbs.twimg.com/media/E1xBUVFVIAEyZkl?format=jpg&name=large",
    caption: "⤹ Weekly Schedule ⤸ ▸[5/21- 5/25]◂"
  },
];

const PostContainer = () => {
  return (
    <>
      {posts.map((post) => {
        return (
          <Post
            id={post.id}
            name={post.name}
            username={post.username}
            likes={post.likes}
            timestamp={post.timestamp}
            profpic={post.profpic}
            postImage={post.postImage}
            caption={post.caption}
          />
        );
      })}
    </>
  );
};

export default PostContainer;
