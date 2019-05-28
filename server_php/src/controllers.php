<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
require_once __DIR__.'/../bootstrap.php';
require_once __DIR__.'/models/models.php';

$repositories = array(
    'education' => $entityManager->getRepository('School'),
    'fields' => $entityManager->getRepository('DataField'),
    'work_history' => $entityManager->getRepository('Job'),
    'projects' => $entityManager->getRepository('Project'),
    'publications' => $entityManager->getRepository('Publication')
);

//Request::setTrustedProxies(array('127.0.0.1'));

$app->after(function (Request $request, Response $response) {
    $response->headers->set('Access-Control-Allow-Origin', '*');
});

$app->get('/', function () use ($app) {
    return $app['twig']->render('index.html.twig', array());
})
->bind('homepage')
;

$app->get('/api', function () use ($app) {
    return $app->json(array('response' => 'Hello, World!'));
});

$app->get('/api/fields/{name}', function (Silex\Application $app, $name) use ($repositories, $entityManager) {
    $field = $repositories['fields']->findOneBy(array('field_name' => $name));
    return $app->json(array('response' => $field));
});

$app->get('/api/education', function () use ($app, $repositories) {
    return $app->json(array('response' => $repositories['education']->findAll()));
});

$app->get('/api/work_history', function () use ($app, $repositories) {
    return $app->json(array('response' => $repositories['work_history']->findAll()));
});

$app->get('/api/publications', function () use ($app, $repositories) {
    return $app->json(array('response' => $repositories['publications']->findAll()));
});

$app->get('/api/projects', function () use ($app, $repositories) {
    return $app->json(array('response' => $repositories['projects']->findAll()));
});

$app->get('/api/projects/{name}', function (Silex\Application $app, $name) use ($repositories, $entityManager) {
    $sql = "SELECT p FROM Project p WHERE p.keyword = ?1";
    $result = $entityManager->createQuery($sql)
                                ->setParameter(1, $name)
                                ->setMaxResults(1)
                                ->getResult();
    
    $description = "";
    if(count($result) > 0)
    {
        $path = __DIR__.'/../../data/projects/' . $result[0]->getFileName();
        $description = file_get_contents($path);
    }
    return $app->json(array('response' => $description));
});

$app->error(function (\Exception $e, Request $request, $code) use ($app) {
    if ($app['debug']) {
        return;
    }

    // 404.html, or 40x.html, or 4xx.html, or error.html
    $templates = array(
        'errors/'.$code.'.html.twig',
        'errors/'.substr($code, 0, 2).'x.html.twig',
        'errors/'.substr($code, 0, 1).'xx.html.twig',
        'errors/default.html.twig',
    );

    return new Response($app['twig']->resolveTemplate($templates)->render(array('code' => $code)), $code);
});
