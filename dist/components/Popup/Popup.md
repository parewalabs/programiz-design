Popup example:

```js
import { useRef } from 'react';
import { Button } from '../../';

// Initiate a ref.
// This ref can be used to call the method of popup function to toggle it
// Function to be called: `togglePopupFunc`
const popUpRef = useRef();
<>
  <Popup ref={popUpRef}>
    <div className="d-flex justify-content-center p-10x">
      <Button type="primary" onClick={() => popUpRef.current.togglePopupFunc()}>
        Close This Popup
      </Button>
    </div>
  </Popup>

  <Button type="primary" onClick={() => popUpRef.current.togglePopupFunc()}>
    Open Popup
  </Button>
</>;
```
