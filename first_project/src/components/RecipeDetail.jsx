import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import './css/RecipeDetail.css';

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
        return (
            <Card>
                <CardImg top src={recipe.picture} alt="Card"></CardImg>
                <CardBody>
                    {this.state.editMode ?
                        <div><input value={recipe.picture} onChange={this.onPictureChange} /><input value={recipe.name} onChange={this.onNameChange} />
                            <textarea value={recipe.description} onChange={this.onDescriptionChange} /></div> :
                        <div><CardTitle>{recipe.name}</CardTitle><CardText>{recipe.description}</CardText></div>}
                </CardBody>
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <Button className="button" onClick={this.props.delete(recipe.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                        <Button className="button" onClick={this.toggleEditMode}><FontAwesomeIcon icon={faPen} /></Button>
                    </div></div></div>
            </Card>
        );
    }
}

export default RecipeDetails;