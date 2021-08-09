import './App.css';
import {Users} from './components/Users';

function App() {
    let cls = 'users';
    return (
        <div className={cls}>
            <Users
                pid={'id'}
                pname={'Leanne Graham'}
                pusername={'Bret'}
                pemail={'Sincere@april.biz'}
                pstreet={'Kulas Light'}
                psuite={'Apt. 556'}
                pcity={'Gwenborough'}
                pzipcode={'92998-3874'}
                plat={'-37.3159'}
                plng={'81.1496'}
                pphone={'1-770-736-8031 x56442'}
                pwebsite={'hildegard.org'}
                hname={'Romaguera-Crona'}
                pcatchPhrase={'Multi-layered client-server neural-net'}
                pbs={'harness real-time e-markets'}/>
        </div>
    );
}

export default App;
