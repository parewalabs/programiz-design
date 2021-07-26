Accordion example:

```js
import { useState } from 'react';
import { Button } from '../../';

// Initiate a ref.
// This ref can be used to call the method of popup function to toggle it
// Function to be called: `togglePopupFunc`
  const [isOpen, setIsOpen] = useState(false);
  const HeaderComponent = (
    <h4 title={"Accordion Title"} className="color-text-main">Accordion Title</h4>
  );

<>
<Accordion headerComponent={HeaderComponent} isOpen={isOpen} className="mb-4x">
  <div className="p-6x">Content</div>
</Accordion>
<Accordion headerComponent={HeaderComponent} isOpen={isOpen} className="mb-4x">
  <div className="p-6x">Contensdt</div>
</Accordion>
<Button type="primary" onClick={() => setIsOpen(!isOpen)}>
    Expand Accordion
</Button>
</>;
```
