import React from 'react';
class App extends Component {
	render()
	{
		axios({
  url: 'https://dog.ceo/api/breeds/list/all',
  method: 'get',
  data: {
    foo: 'bar'
  }
})
	}

}