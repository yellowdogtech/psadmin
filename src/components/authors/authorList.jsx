"use strict";

var React = require('react');

var AuthorList = React.createClass({
    render: function() {
        propTypes: {
            authors: React.PropTypes.array.isRequired
        };
        var createAuthorRow = function(author) {
            return (
                    <tr key={author.id}>
                        <td><a href={"/#authors/"+author.id}>{author.id}</a></td>
                        <td>{author.firstName} {author.lastName}</td>
                    </tr>
                );
        };

        return (
          <div>
              <h1>Author List</h1>

              <table className="table">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    {this.props.authors.map(createAuthorRow, this )}
                </tbody>
              </table>

          </div>
        );
    }
});

module.exports = AuthorList;