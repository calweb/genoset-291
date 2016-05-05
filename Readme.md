# genoset-291
[![Build Status](https://travis-ci.org/calweb/genoset-291.png?branch=master)](https://travis-ci.org/calweb/genoset-291)

Use this module to help determine if your genome is lower risk for [heart attack or cardiovascular incident](http://www.snpedia.com/index.php/Gs291).

## Information

<table>
<tr>
<td>Package</td><td>genoset-291</td>
</tr>
<tr>
<td>Description</td>
<td>Determines if a genome is lower risk for heart attack or cardiovascular incident</td>
</tr>
<tr>
<td>Node Version</td>
<td>~ 5.5</td>
</tr>
</table>

## Compatibility

This genoset is to be used with DNA-JSON. See [dna2json](https://github.com/genomejs/dna2json) for more information.

## Usage

```js
var lowHeartAttackRisk = require('genoset-291')
var dna = require('./dna.json')

console.log(lowHeartAttackRisk(dna))
// → `true` or `false`
```

## Contributions

This Project follows the StandardJS style guide.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

To Contribute:

- Clone Repo
- `npm install`
- Write Code
- Write Test(s)
- Submit Pull Request

## License

_genoset-291_ is available under the [MIT](https://mths.be/mit) license.
