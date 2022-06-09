var assert = require('assert')
var download = require('..')
var read = require('fs-readdir-recursive')
var rm = require('rimraf').sync

describe('download-git-repo', function () {
  this.timeout(20000)

  beforeEach(function () {
    rm('test/tmp')
  })

  var filter = function (x) {
    return x[0] !== '.' || x === '.git'
  }

  var topLevelDomain = {
    github: '.com',
    gitlab: '.com',
    bitbucket: '.org'
  }

  var runStyle = function (type, style) {
    var clone = false
    if (style === 'clones') {
      clone = true
    }

    it(style + ' master branch by default', function (done) {
      download(type + ':flippidippi/download-git-repo-fixture', 'test/tmp', { clone: clone }, function (err) {
        if (err) return done(err)
        var actual = read('test/tmp', filter)
        var expected = read('test/fixtures/' + type + '/master')
        assert.deepStrictEqual(actual, expected)
        done()
      })
    })

    it(style + ' a branch', function (done) {
      download(type + ':flippidippi/download-git-repo-fixture#my-branch', 'test/tmp', { clone: clone }, function (err) {
        if (err) return done(err)
        var actual = read('test/tmp', filter)
        var expected = read('test/fixtures/' + type + '/my-branch')
        assert.deepStrictEqual(actual, expected)
        done()
      })
    })

    it(style + ' a branch with slashes', function (done) {
      download(type + ':flippidippi/download-git-repo-fixture#my/branch/with/slashes', 'test/tmp', { clone: clone }, function (err) {
        if (err) return done(err)
        var actual = read('test/tmp', filter)
        var expected = read('test/fixtures/' + type + '/my-branch-with-slashes')
        assert.deepStrictEqual(actual, expected)
        done()
      })
    })

    it(style + ' master branch with specific origin', function (done) {
      download(type + ':' + type + topLevelDomain[type] + ':flippidippi/download-git-repo-fixture', 'test/tmp', { clone: clone }, function (err) {
        if (err) return done(err)
        var actual = read('test/tmp', filter)
        var expected = read('test/fixtures/' + type + '/master')
        assert.deepStrictEqual(actual, expected)
        done()
      })
    })

    it(style + ' master branch with specific origin and protocol', function (done) {
      download(type + ':https://' + type + topLevelDomain[type] + ':flippidippi/download-git-repo-fixture', 'test/tmp', { clone: clone }, function (err) {
        if (err) return done(err)
        var actual = read('test/tmp', filter)
        var expected = read('test/fixtures/' + type + '/master')
        assert.deepStrictEqual(actual, expected)
        done()
      })
    })
  }

  var runType = function (type) {
    runStyle(type, 'downloads')

    runStyle(type, 'clones')

    it('clones master branch with specific origin without type', function (done) {
      download(type + topLevelDomain[type] + ':flippidippi/download-git-repo-fixture', 'test/tmp', { clone: true }, function (err) {
        if (err) return done(err)
        var actual = read('test/tmp', filter)
        var expected = read('test/fixtures/' + type + '/master')
        assert.deepStrictEqual(actual, expected)
        done()
      })
    })

    it('clones master branch with specific origin and protocol without type', function (done) {
      download('https://' + type + topLevelDomain[type] + ':flippidippi/download-git-repo-fixture', 'test/tmp', { clone: true }, function (err) {
        if (err) return done(err)
        var actual = read('test/tmp', filter)
        var expected = read('test/fixtures/' + type + '/master')
        assert.deepStrictEqual(actual, expected)
        done()
      })
    })
  }

  describe('via github', function () {
    runType('github')

    it('downloads from github by default', function (done) {
      download('flippidippi/download-git-repo-fixture', 'test/tmp', function (err) {
        if (err) return done(err)
        var actual = read('test/tmp', filter)
        var expected = read('test/fixtures/github/master')
        assert.deepStrictEqual(actual, expected)
        done()
      })
    })
  })

  describe('via gitlab', function () {
    runType('gitlab')
  })

  describe('via bitbucket', function () {
    runType('bitbucket')
  })

  describe('via direct', function () {
    it('downloads master branch', function (done) {
      download('direct:https://gitlab.com/flippidippi/download-git-repo-fixture/repository/archive.zip', 'test/tmp', function (err) {
        if (err) throw err
        var actual = read('test/tmp', filter)
        var expected = read('test/fixtures/gitlab/master')
        assert.deepStrictEqual(actual, expected)
        done()
      })
    })

    it('downloads master branch file filter', function (done) {
      download('direct:https://gitlab.com/flippidippi/download-git-repo-fixture/repository/archive.zip', 'test/tmp', { filter: file => file.path.slice(-3) === '.md' }, function (err) {
        if (err) throw err
        var actual = read('test/tmp', filter)
        var expected = read('test/fixtures/gitlab/master-only-md')
        assert.deepStrictEqual(actual, expected)
        done()
      })
    })

    it('downloads a branch', function (done) {
      download('direct:https://gitlab.com/flippidippi/download-git-repo-fixture/repository/archive.zip?ref=my-branch', 'test/tmp', function (err) {
        if (err) throw err
        var actual = read('test/tmp', filter)
        var expected = read('test/fixtures/gitlab/my-branch')
        assert.deepStrictEqual(actual, expected)
        done()
      })
    })

    it('clones master branch', function (done) {
      download('direct:https://gitlab.com/flippidippi/download-git-repo-fixture.git', 'test/tmp', { clone: true }, function (err) {
        if (err) throw err
        var actual = read('test/tmp', filter)
        var expected = read('test/fixtures/gitlab/master')
        assert.deepStrictEqual(actual, expected)
        done()
      })
    })

    it('clones a branch', function (done) {
      download('direct:https://gitlab.com/flippidippi/download-git-repo-fixture.git#my-branch', 'test/tmp', { clone: true }, function (err) {
        if (err) throw err
        var actual = read('test/tmp', filter)
        var expected = read('test/fixtures/gitlab/my-branch')
        assert.deepStrictEqual(actual, expected)
        done()
      })
    })

    it('clones a branch because options', function (done) {
      download('direct:https://gitlab.com/flippidippi/download-git-repo-fixture.git', 'test/tmp', { clone: true, checkout: 'my-branch', shallow: false }, function (err) {
        if (err) throw err
        var actual = read('test/tmp', filter)
        var expected = read('test/fixtures/gitlab/my-branch')
        assert.deepStrictEqual(actual, expected)
        done()
      })
    })
  })
})
