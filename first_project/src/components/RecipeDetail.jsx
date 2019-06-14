import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import './css/RecipeDetail.css';
import IngredientList from '../containers/IngredientList';

class RecipeDetails extends Component {

    state = {
        recipe: this.props.recipe,
        editMode: this.props.editMode
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
        if (this.props.update)
            this.props.update(this.state.recipe);
    }

    onPictureChange = event => {
        this.setState({
            recipe: {
                ...this.state.recipe, picture: event.target.value
            }
        });
    }

    onNameChange = event => {
        this.setState({
            recipe: {
                ...this.state.recipe, name: event.target.value
            }
        });
    }

    onDescriptionChange = event => {
        this.setState({
            recipe: {
                ...this.state.recipe, description: event.target.value
            }
        });
    }

    render() {
        let { recipe } = this.state;
        console.log(recipe);
        return (
            <Card >
                <CardImg top src={recipe.picture} alt="Card"></CardImg>
                <CardBody>
                    {this.state.editMode ?
                        <div><input value={recipe.picture} onChange={this.onPictureChange} /><input value={recipe.name} onChange={this.onNameChange} />
                            <textarea value={recipe.description} onChange={this.onDescriptionChange} />
                            </div> :
                        <div><CardTitle><h1>{recipe.name}</h1></CardTitle><CardText><h5>{recipe.description}</h5></CardText>
                        <IngredientList></IngredientList></div>}
                </CardBody>

                    <div className="row">
                    <div className="col-md-6">
                        <button type="button" className="btn btn-outline-dark btn-sm" onClick={this.props.delete(recipe.id)}><FontAwesomeIcon icon={faTrash} /></button>
                        <button type="button" className="btn btn-outline-dark btn-sm" onClick={this.toggleEditMode}><FontAwesomeIcon icon={faPen} /></button>
                    </div></div>
            </Card>
        );
    }
}

export default RecipeDetails;