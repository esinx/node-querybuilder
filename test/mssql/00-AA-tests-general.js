const should = require('chai').should();

describe('QueryBuilder', () => {
	it('actually exists and can be initialized', () => {
		const QueryBuilder = require('../../drivers/mssql/query_builder.js');
		const qb = new QueryBuilder();
		qb.should.be.instanceOf(QueryBuilder);
	});
});
