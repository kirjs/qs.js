var update = require('../../site-src/update');
var assert = require('assert');

describe('update', () =>{
  describe('Library version extraction', ()=>{
    it('does not fail if there are no supported libraries', function (){
      assert.deepEqual(update.extractLib('<html></html>'), []);
    });

    it('extract single cdnjs dependency', function (){
      assert.deepEqual(update.extractLib(
        `<html>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.1/react.js"></script>
        </html>`), [{name: 'react', version: '0.14.1'}]);
    });

    it('extract multiple cdnjs dependencies', function (){
      assert.deepEqual(update.extractLib(
        `<html>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.1/react.js"></script>
            blabla 
            <script src = "https://cdnjs.cloudflare.com/ajax/libs/react-highcharts/7.0.0/ReactHighcharts.js"></script>
        </html>`), [
        {
          name: 'react',
          version: '0.14.1'
        },
        {
          "name": "react-highcharts",
          "version": "7.0.0"
        }
      ]);
    });
  });
});