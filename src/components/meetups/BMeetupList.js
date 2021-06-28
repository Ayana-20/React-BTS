import BMeetupItem  from './BMeetupItem';
import classes from './BMeetupItem.module.css'
function BMeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <BMeetupItem 
        key={meetup.id} 
        id={meetup.id} 
        image={meetup.image} 
        title={meetup.title}
        address={meetup.address}
        description={meetup.description}
        />
      ))}
    </ul>
  );
}
export default BMeetupList;