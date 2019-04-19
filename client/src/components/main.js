import React from 'react';
import Home from './Home'
import ViewVacancy from './vacancyCruds/Vacancy'
import admin from './adminCruds/CreateAdminForm'
import {Switch,Route} from 'react-router-dom'

import vacancyFilter from './filters/VacancySearch'
const Main = ()=>(
<Switch>
    <Route exact path ="/" component = {Home}/>,
    <Route  path= "/createAdmin" component = {admin}/>
    <Route  path= "/vacancy/viewAll" component = {ViewVacancy}/>
    <Route  path= "/search/Vacancies" component = {vacancyFilter}/>

    
</Switch>
)
export default Main;