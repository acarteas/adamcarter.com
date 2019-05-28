<?php
// list_products.php
require_once __DIR__."/src/models/models.php";
require_once "bootstrap.php";

$publicationRepository = $entityManager->getRepository('DataField');
$publications = $entityManager->find("DataField", 1);
print_r($publications);
foreach ($publications as $publication) {
    echo sprintf("-%s\n", $publication->getCitation());
}

$sql = "SELECT p FROM Project p WHERE p.keyword = ?1";
$project = $entityManager->createQuery($sql)
                             ->setParameter(1, "BOSS")
                             ->setMaxResults(1)
                             ->getResult();
print_r($project);