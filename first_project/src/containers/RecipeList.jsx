import React, { Component } from 'react';
import RecipeDetail from '../components/RecipeDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'reactstrap/lib/Button';
import '../App.css';
import axios from 'axios';

   /*maxId = () => this.state.recipes.map(r => r.id).reduce((max, id) => max > id ? max : id, 0);*/

class RecipeList extends Component {
    state = {
        recipes: [],
        addMode: false
    }

    componentDidMount() {
        this.updateAll();
     }

    updateAll() {
        axios.get('http://localhost:8080/api/v1/recipes')
        .then(response => {
            console.log(response.data)
            this.setState({
                recipes: response.data
            });
        })
        .catch(error => {
            console.log("Error")
        });
    }

    delete = (id) => () => {
         axios.delete('http://localhost:8080/api/v1/recipes/' + id)
			.then(response => {
				this.updateAll();
			})
			.catch(error => {
				console.log("Error")
			});
        this.setState({
            addMode: false
        });
    }

    add = (recipe) => {
        axios.post('http://localhost:8080/api/v1/recipes', recipe)
			.then(response => {
				this.updateAll();
			})
			.catch(error => {
				console.log("Error")
			});
        this.setState({
            addMode: false
        });
    }

    update = (recipe) => {
        axios.put('http://localhost:8080/api/v1/recipes', recipe)
			.then(response => {
				this.updateAll();
			})
			.catch(error => {
				console.log("Error")
			});
    }

    toggleAddMode = () => {
        this.setState({
            addMode: !this.state.addMode
        });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light"><h1>COCKTAIL</h1>
                    <Button className="button" onClick={this.toggleAddMode}><FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon></Button></nav>

                <div className="container">
                    <div className="row">
                        {this.state.recipes.map(recipe => <div className="col-md-5"> <RecipeDetail recipe={recipe} delete={this.delete} update={this.update} /></div>)}
                        {this.state.addMode ?
                            <div className="col-md-5"> <RecipeDetail editMode="true" recipe={{}} delete={this.delete} update={this.add} /> </div> : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeList;