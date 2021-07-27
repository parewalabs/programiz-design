ProgressBar example:

```js

import {useState} from 'react';

const [value, setValue] = useState("");

const [InitialValue, setInitialValue] = useState("Initial Value");

<>
<Input label="Username" type="text" placeholder="Your Username" inputChangeFunc={() => { setValue(event.target.value) }} className="mb-4x"/>

<Input label="Username" type="text" placeholder="Your Username" inputChangeFunc={() => { setValue(event.target.value) }} hasError={true} errorMsg={"Username cannot be left empty"} className="mb-4x"/>

<Input label="Username" type="text" placeholder="Your Username" inputChangeFunc={() => { setValue(event.target.value) }} disabled={true} className="mb-4x"/>

<Input label="Initial Value" type="text" placeholder="Initial Value" value={InitialValue} inputChangeFunc={() => { setInitialValue(event.target.value) }} className="mb-4x"/>

<Input label="Password" type="password" placeholder="Your Password" inputChangeFunc={() => { setValue(event.target.value) }} className="mb-4x"/>

</>
```
