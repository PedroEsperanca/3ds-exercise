
var models = require('../scripts/models.js');

describe("models have necessary data", function() {
  it("revenue has expected values", function() {
    expect(models.revenue.total).toBe(200000);
    expect(models.revenue.tablet).toBe(120000);
    expect(models.revenue.smartphone).toBe(80000);
  });
  it("impressions has expected values", function() {
    expect(models.impressions.total).toBe(50000000);
    expect(models.impressions.tablet).toBe(20000000);
    expect(models.impressions.smartphone).toBe(30000000);
  });
  it("visits has expected values", function() {
    expect(models.visits.total).toBe(600000000);
    expect(models.visits.tablet).toBe(480000000);
    expect(models.visits.smartphone).toBe(120000000);
  });
});

describe("models calculate necessary data", function() {
  it("calculate percentage", function() {
    expect(models.percentage(
		10,
		100
	)).toBe(10);
  });
});
