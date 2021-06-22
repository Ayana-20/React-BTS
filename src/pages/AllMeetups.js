import MeetupList from "../components/meetups/MeetupList";
const DUMMY_DATA= [
    {
    id: 'm1',
    title: 'BON VOYAGE',
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/16f35e88284187.5dd428d4e1938.png',
    address: '4 Seasons',
    description:
      "Bangtan on new adventures",
  },
  {
    id: 'm2',
    title: 'Summer Package',
    image:
      'https://1.bp.blogspot.com/-gSTr1wWCKlY/XoODIC_T3RI/AAAAAAAADQo/BKouTG1_XsoeoM3TVpg8z4zNGr1jTQDxACLcBGAsYHQ/s1600/bts_summer_package_2018_eng_sub_saipan.jpg',
    address: '4 Seasons',
    description:
      "BTS Summer Escape  ",
    },
    {
        id: 'm3',
        title: 'Winter Package',
        image:
          'https://armyconnect.ph/wp-content/uploads/2021/03/bts-winter-package-2021-poster-notes.jpg',
        address: '2 Seasons',
        description:
          "Winter bliss",
      },
      {
        id: 'm4',
        title: 'BTS, In The Soop',
        image:
          'https://itsyowyow.com/wp-content/uploads/2021/01/unnamed-1.jpg',
        address: '1 Season',
        description:
          "Bangtan's lazy getaway during Quarantine",
      },
      {
        id: 'm5',
        title: 'BTS World Tour',
        image:
          'https://channel-korea.com/wp-content/uploads/2017/10/C6wG-ekWYAAr7az.jpg',
        address: '5 Seasons',
        description:
          "Bangtan's reign over the world",
      },
]
function AllMeetupsPage() {
  return (
    <section>
      <h1>BTS Bon Voyage</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;