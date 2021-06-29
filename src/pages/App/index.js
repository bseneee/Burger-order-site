import React, { Component } from 'react';
import styles from './app.module.css';
import Toolbar from '../../components/Toolbar'
import  BurgerPage  from '../BurgerPage';
import SideBar from '../../components/SideBar';

 class App extends Component{
    constructor(props){
        super(props);
        this.state={
            showSideBar:false,
        }
    }

    toggleSideBar=()=>{
        this.setState(prev=>{
            return {showSideBar:!prev.showSideBar}
        });
    }

    render(){
        return (
            <div>
                <p>App js</p>
                <Toolbar toggleSideBar={this.toggleSideBar}/>
                <SideBar showSideBar={this.state.showSideBar}  toggleSideBar={this.toggleSideBar}></SideBar>
                <main className={styles.content}>
                    <BurgerPage />
                </main>
            </div>
    );
 }     
}

export default App;
