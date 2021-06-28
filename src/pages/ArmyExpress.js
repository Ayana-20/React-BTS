
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function ArmyExpress(){
    const hisory = useHistory();
    function addMeetupHandler(meetupData){
        fetch(
            'https://react-bts-default-rtdb.firebaseio.com/meetups.json', 
            {
              method: 'POST', 
              body: JSON.stringify(meetupData),
              headers:{
                'Content-Type': 'application/json'
               }
            }
        ).then(() => {
            hisory.replace('/');
        });
    }
   
   return <section>
        <h1>Army Express</h1>
        <NewMeetupForm onAddMeetup = {addMeetupHandler} />
    </section>
}

export default ArmyExpress;