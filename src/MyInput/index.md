# MyInput

This is an example component.

```jsx
import { MyInput } from 'web-module-dumi';
const handleChange = (e)=>{
    console.log(e,'handleChange');
}
export default () => <MyInput title='输入提示' onChange={ (e)=> handleChange(e)} />
```
