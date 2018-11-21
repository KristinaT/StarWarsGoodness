import React, {Component} from 'react'
import CategoryDetailsInfo from './CategoryDetailsInfo'
import * as Constants from '../Constants/Constants';
class CategoryDetails extends Component {

    constructor(){
        super()
        this.state={
            categoryResult:[],
            isLoading:true
        }
    }

    handleClick = async (category) => {
        console.log(category)
        try{
            const response = await this.handleFetch(category);
            console.log(response);
            this.setState({categoryResult:response})
            return response;
        }
        catch(e){
            console.log(e);
        }
    }

    handleFetch = async (category) =>{
        try {
            const url = `${Constants.STARWARS_API_URL}/${category}`;
            const response = await fetch(url);
            const json= await response.json();

            if(json.count>=1){           
                return Promise.resolve(json.results);
            }
            else{
                return Promise.reject(console.error('Cannot fetch the category'));
            }
        }
        catch(e) {
            console.log(e);
        }
    }   

    async componentDidMount() {
        try{
            const category = this.props.location.state.category
            const response = await this.handleFetch(category);

            this.setState({
                categoryResult: response,
                isLoading: false
              });

            return response;
        }
        catch(e){
            console.log(e);
            this.setState({
                categoryResult: e,
                isLoading: false
                });
        }    
      }

   render(){
    const {categoryResult} = this.state;
    return(
        <CategoryDetailsInfo categoryResult={categoryResult}>Details </CategoryDetailsInfo>
    )
   }
}
export default CategoryDetails;