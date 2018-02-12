"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
	dbm = options.dbmigrate;
	type = dbm.dataType;
	seed = seedLink;
};

exports.up = function(db) {
	return db.createTable("Event", {
		id: { type: "int", primaryKey: true },
		name: "string",
		description: "string",
		linkToProof: "string",
		taxType: "int",
		createdAt: "timestamp",
		updatedAt: "timestamp"
	});
};

exports.down = function(db) {
	return db.dropTable("Event");
};

exports._meta = {
	version: 1
};
