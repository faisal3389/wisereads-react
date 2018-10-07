import React, { Component } from 'react';
import BookService from '../../Services/bookService'
import {Tabs, Tab,Form, Alert} from 'react-bootstrap';


class Book extends Component {
    constructor (props) {
        super(props)
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBulkChange = this.handleBulkChange.bind(this);
      }

      handleSubmit (event){
        event.preventDefault();
        BookService.addToBook(this.state)
      }

      handleBulkChange(event){
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://35.231.195.210:3000/bulk', {
        method: 'POST',
        body: data,
        }).then((results)=>{
            console.log(results)
            if (results.status==200){
                alert("success")
            }
        })
      }

      handleChange(event) {
          event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state.value)
      }
    
      render () {
        return (
            <div className="container">
            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Manual Upload">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="Title">Title:</label>
                    <input name="title" type="text" value={this.state.value} onChange={this.handleChange} className="form-control" id="title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input name="author" type="text" value={this.state.value} onChange={this.handleChange} className="form-control" id="author"/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input name="price" type="text" value={this.state.value} onChange={this.handleChange} className="form-control" id="price"/>
                </div>
                <div className="form-group">
                    <label htmlFor="des">Description:</label>
                    <textarea name="description" value={this.state.value} onChange={this.handleChange} type="text" className="form-control" id="des"/>
                </div>
                <div className="form-group">
                    <label htmlFor="rpd">Rent per day:</label>
                    <input name="rentPerDay" value={this.state.value} onChange={this.handleChange} type="text" className="form-control" id="rpd"/>
                </div>
                <div className="form-group">
                    <label htmlFor="rpw">Rent per week:</label>
                    <input name="rentPerWeek" value={this.state.value} onChange={this.handleChange} type="text" className="form-control" id="rpw"/>
                </div>
                <div className="form-group">
                    <label htmlFor="rpm">Rent per month:</label>
                    <input name="rentPerMonth" value={this.state.value} onChange={this.handleChange} type="text" className="form-control" id="rpm"/>
                </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form> 
            </Tab>
            <Tab eventKey={2} title="Bulk Upload">
            <form action="http://localhost:3000/bulk" onSubmit={this.handleBulkChange} method="post" encType="multipart/form-data" >
                <br/>
                <input type="file" name="filetoupload" className="form-control-file" id="choosefile"/><br/>
              <input type="submit" className="btn btn-primary"/>
            </form>
            </Tab>
            </Tabs>
          </div>
        )
    }
}

export default Book;