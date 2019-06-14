import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Chip from '@material-ui/core/Chip';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import '../components/css/IngredientList.css';

class IngredientDetail extends Component {

    state = {
        addMode: false,
        ingredient: this.props.ing,
        parentAddMode: this.props.add
    }

    toggleAddMode = () => {
        this.setState({
            addMode: true
        });
        if (this.props.submit)
            this.props.submit(this.state.ingredient.name);
    }

    handleDelete = () => {
        if (this.props.delete)
            this.props.delete(this.state.ingredient.id);
    }

    onIngredientChange = event => {
        console.log(event.target.value)
        this.setState({
            ingredient: {...this.state.ingredient, name: event.target.value}
        });
    }

    render() {
        return (
            <div>
                 


                {this.state.parentAddMode ?
                    <div className="row">
                        <div className="col-md-9"><input onChange={this.onIngredientChange} /></div>
                        <div className="col-md-3"><button type="button" className="btn btn-secondary btn-sm" onClick={this.toggleAddMode}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></button></div>
                    </div> :
                    <div className="chip"> 
                    <div className="col-sm-2">
                    <Chip
                        color="secondary"
                        icon={<LocalFloristIcon />}
                        label={this.state.ingredient.name}
                        onDelete={this.handleDelete} 
                    />
                    </div>
                    </div>
                }
            </div>
        );
    }
}

export default IngredientDetail;