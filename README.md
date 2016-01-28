# HTML Model Decoder

## Example

```html
<script id='model' type='application/json'>{&quot;foo&quot;:&quot;bar&quot;,&quot;zip&quot;:[1,2,3]}</script>
```

```javascript
var htmlModeDecoder = require('@domain-group/fe-html-model-decoder');

var decoded = htmlModeDecoder(document.getElementById('model'));

// {foo: 'bar', zip: [1, 2, 3]}
```

## Usage

**`function(DOMNode node)`**

A single function is exported, which expects a DOMNode as its first and only
parameter. This DOMNode should contain some HTML Encoded JSON to be decoded and
returned.

## Credit

Modified from [IdentityServer3](https://github.com/IdentityServer/IdentityServer3/blob/a6e2b6bdfd1516af6cd9fdc9f46a08bb23bb553e/source/Core/Services/DefaultViewService/HttpAssets/app/app.js#L12-L23)
