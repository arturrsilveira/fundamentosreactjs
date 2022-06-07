import { Post } from "./Post" 

export function App() {

  return (
    <div>
      <h1>Hello World!</h1>
      <Post 
        author="Artur Rafael da Silveira" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam a voluptatum architecto error iste blanditiis repudiandae? Molestias omnis provident assumenda error, consequuntur sit temporibus optio magnam corporis sunt eveniet?"
      />
      <Post 
        author="Simone da Silveira" 
        content="Nova foto"
      />
    </div>
    
  )
}
