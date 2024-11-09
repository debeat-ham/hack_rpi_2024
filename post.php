<?php
header("Content-Type: application/json");

// File to store posts
$postsFile = 'posts.json';

// Initialize an empty array if the file doesn't exist
if (!file_exists($postsFile)) {
    file_put_contents($postsFile, json_encode([]));
}

// Get the current posts
$posts = json_decode(file_get_contents($postsFile), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Read the JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    if (isset($input['content']) && !empty(trim($input['content']))) {
        // Add the new post to the array
        $posts[] = ['content' => htmlspecialchars($input['content'])];

        // Save the updated posts back to the file
        file_put_contents($postsFile, json_encode($posts));

        // Respond with success message
        echo json_encode(['message' => 'Post added']);
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Content is required']);
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Respond with the list of posts
    echo json_encode($posts);
} else {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
}
?>