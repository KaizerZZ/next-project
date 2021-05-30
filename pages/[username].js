import { useRouter } from "next/router";
import Nav from "components/ui/Nav";
import TopNav from "components/ui/profile/TopNav"
import ProfileContainer from "components/containers/ProfileContainer";

const profiles = [
  {
    id: 1,
    username: "shirakamifubuki",
    name: "Shirakami Fubuki",
    profpic: "https://pbs.twimg.com/profile_images/1391543185025822720/v2pZA-4h_400x400.jpg",
    bio: "Vtuber事務所ホロライブプロダクション/1期生ゲーマーズ白上フブキ ❖担当絵師:凪白みと @lemon_mito【ツイ担当】 は黒上 はユニコン 【絵】#絵フブキ 【生放送】#フブキch 【切り抜き】#フブ切り【ファン】#すこん部"
  
  },
  {
    id: 2,
    username: "nakiriayame",
    name: "Nakiri Ayame",
    profpic: "https://pbs.twimg.com/profile_images/1374730291542167556/JZ32XH6n_400x400.jpg",
    bio: "ホロライブバーチャル鬼神 の百鬼あやめ (なきり あやめ)というぞ 式神と共に幽世からやってきた！ ￤母上:【@nana_kaguraaa】￤生放送ﾀｸﾞ #百鬼あやめch ￤ﾌｧﾝｱｰﾄ #百鬼絵巻 (※活動で使用する場合があるぞ！)￤余の関連ツイート #あやめ夜行"
    
  },
  {
    id: 3,
    username: "ookamimio",
    name: "Ookami Mio",
    profpic: "https://pbs.twimg.com/profile_images/1377457146292436993/pj_erlKH_400x400.jpg",
    bio: "ホロライブゲーマーズ所属の大神ミオだよ タロット占い ウクレレ(練習中) 担当Illustrator: @AC______シンボルアイコン:Pohon hijau abadi(シルエットが似てる) #みおーん絵 #ミオかわいい #ミオじゅ〜る #ボイスのミオかわいい"
    
  },
  {
    id: 4,
    username: "watsonameliaEN",
    name: "Amelia Watson",
    profpic: "https://pbs.twimg.com/profile_images/1318958836120649728/7JHxy2UO_400x400.jpg",
    bio: "なるほど~ Hololive's #1 Time Traveling Detective is on the case! | Mamas: @nab0i @7name_ #amelive #ameliaRT #teamates #holoMyth #hololiveEnglish"
    
  },
  {
    id: 5,
    username: "gawrguraEN",
    name: "Gawr Gura",
    profpic: "https://pbs.twimg.com/profile_images/1309957523089354760/uRrxAmOB_400x400.jpg",
    bio: "どうも、サメです！I am here and I am hungry. #gawrt #chumbuds #gawrgura @amsrntk3"
    
  },
];

const UserProfilePage = () => {
  const router = useRouter();
  const { query } = router;
  let user = profiles.find(prop=>prop.username === `${query.username}`);
  return (
    <>
    <TopNav username={query.username}/>
    <ProfileContainer 
          name={user.name}
          profpic={user.profpic} 
          username={user.username}
          bio={user.bio}
          />
    <Nav />
    </>
  );
};

export default UserProfilePage;
