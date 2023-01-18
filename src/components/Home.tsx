import { useUser } from '../hooks/use-user';

const Home: React.FC = () => {

    const { user } = useUser();
    
    return(
        <div className='games'>
            <br></br>
            <h1>Welcome {user}!</h1>
        </div>
    )
}

export default Home;