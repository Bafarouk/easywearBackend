const claims = require("../../models/claim");

const Joi = require("../../lib/joi");

async function addClaim(req, res) {
  const claim = await claims.insertOne(req.body);
  if (claim) {
    return res.status(200).send(claim);
  }
  return res.status(400).end();
}

async function deleteClaim(req, res) {
  const claim = await claims.deleteone(req.params.id);
  if (claim) {
    return res.status(200).send(claim);
  }
  return res.status(400).end();
}

async function updateclaimByUser(req, res) {
  const claim = await claims.updateUser(req.params.id, req.body);
  if (claim) {
    return res.status(200).send(claim);
  }
  return res.status(400).end();
}

async function validateClaim(req, res) {
  const claim = await claims.validateClaim(req.params.id, req.body);
  if (claim) {
    return res.status(200).send(claim);
  }
  return res.status(400).end();
}
async function findOne(req, res) {
  const claim = await claims.findOne(req.params.id);
  if (claim) {
    return res.status(200).send(claim);
  }
  return res.status(400).end();
}
async function findAll(req, res) {
  const claim = await claims.findAll();
  if (claim) {
    return res.status(200).send(claim);
  }
  return res.status(400).end();
}

async function findAllByType(req, res) {
  const claim = await claims.findAllByType(req.query.type);

  if (claim) {
    return res.status(200).send(claim);
  }
  return res.status(400).end();
}
async function findAllByClaimUrl(req, res) {
  const claim = await claims.findAllByClaimUrl(req.params.claim_url);

  if (claim) {
    return res.status(200).send(claim);
  }
  return res.status(400).end();
}

module.exports = {
  addClaim,
  deleteClaim,
  validateClaim,
  updateclaimByUser,
  findOne,
  findAll,
  findAllByType,
  findAllByClaimUrl,
};
