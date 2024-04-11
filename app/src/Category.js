import React,{Component} from "react";
import AppNav from "./AppNavUser";

class Category extends Component{
    state = {
        isLoading : true,
        Categories : []
    }
    async componentDidMount(){
        const response = await fetch('/api/categories');
        const body = await response.json();
        this.setState({Categories :body, isLoading: false});
    }
    render(){
        const {Categories , isLoading} = this.state;
        if(isLoading)
            return(<div>Loading ...</div>)
        return (
            <div>
                <AppNav></AppNav>
                <h2>Categories</h2>
                {
                    Categories.map( category =>
                        <div id={category.categoryid}>
                            {category.name}
                        </div> 
                    )
                }
            </div>
        );
    }
}
export default Category;