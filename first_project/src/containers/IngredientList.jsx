import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import '../components/css/IngredientList.css';
import IngredientDetail from '../components/IngredientDetail';

class IngredientList extends Component {

    state = {
        addMode: false,
        ingredients: [
            {
                quantity: 3,
                unit: 'g',
                ingredient: {
                    id: 0,
                    name: 'carrot'
                }
            }
        ],
    }

    maxId = () => this.state.ingredients.map(r => r.ingredient.id).reduce((max, id) => max > id ? max : id, 0);

    add = (name) => {
        console.log(name)
        this.setState({
            ingredients: [...this.state.ingredients, {
                quantity: 3,
                unit: 'g',
                ingredient: {
                    name: name,
                    id: this.maxId() + 1
                }
            }],
            addMode: false
        })
    }

    delete = (id) => {
        console.log(id)
        this.setState({
            ingredients:  this.state.ingredients.filter(i => i.ingredient.id !== id)
        })
    }

    toggleAddMode = () => {
        this.setState({
            addMode: !this.state.addMode
        })
    }

    render() {
        return (
            <div className="ingredients">
                <div className="row">
                    <div className="col-md-9"><h6>INGREDIENTS</h6></div>
                    <div className="col-md-3"><button type="button" className="btn btn-secondary btn-sm" onClick={this.toggleAddMode}><FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon></button></div>
                </div>
                <div className="row">
                    {this.state.ingredients.map(ing => <IngredientDetail ing={ing.ingredient} delete={this.delete} /*update={this.update}*/ />)}
                </div>
                {this.state.addMode ?
                    <div>
                        <IngredientDetail add="true" submit={this.add}></IngredientDetail>
                    </div> : null}
            </div>
        );
    }
}

export default IngredientList;