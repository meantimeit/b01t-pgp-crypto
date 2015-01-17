var pgp = require('openpgp');

function createPair(userId, passphrase, done) {
  var options = {
    numBits: 2048,
    userId: userId,
    passphrase: passphrase
  };

  function created(key) {
    var k = {
      public: key.toPublic().armor(),
      private: key.armor()
    }

    done(null, k);
  }

  pgp.key.generate(options).then(created)
}

module.exports = createPair;
