import { useState } from "preact/hooks";
import type { ShortCode } from "@/models/ShortCode.ts";

interface DashboardProps {
  shortCodes: ShortCode[];
}

export default function DashboardComponent({ shortCodes: initialShortCodes }: DashboardProps) {
  const [shortCodes, setShortCodes] = useState(initialShortCodes);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    title: "",
    url: "",
    redirectTime: 5,
  });

  const handleEdit = (shortCode: ShortCode) => {
    setEditingId(shortCode.id);
    setEditForm({
      title: shortCode.title,
      url: shortCode.url,
      redirectTime: shortCode.redirectTime,
    });
  };

  const handleSave = async (id: string) => {
    try {
      const response = await fetch(`/api/shortCodes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editForm),
      });

      if (response.ok) {
        const updatedShortCode = await response.json();
        setShortCodes(shortCodes.map(sc => 
          sc.id === id ? updatedShortCode : sc
        ));
        setEditingId(null);
      } else {
        alert("Failed to update short code");
      }
    } catch (error) {
      alert("Error updating short code");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this short URL?")) {
      return;
    }

    try {
      const response = await fetch(`/api/shortCodes/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setShortCodes(shortCodes.filter(sc => sc.id !== id));
      } else {
        alert("Failed to delete short code");
      }
    } catch (error) {
      alert("Error deleting short code");
    }
  };

  const copyToClipboard = (shortCode: string) => {
    const url = `${globalThis.location.origin}/${shortCode}`;
    navigator.clipboard.writeText(url);
  };

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return "Unknown";
    const d = new Date(date);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (shortCodes.length === 0) {
    return (
      <div class="text-center py-12">
        <div class="text-6xl mb-4">📋</div>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          No short URLs yet!
        </h2>
        <p class="text-gray-600 mb-6">
          Create your first short URL to get started.
        </p>
        <a
          href="/new/short"
          class="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <span class="mr-2">🎯</span>
          Create Your First Short URL
        </a>
      </div>
    );
  }

  return (
    <div class="space-y-4">
      {/* Stats */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <div class="text-3xl font-bold text-yellow-600">
            {shortCodes.length}
          </div>
          <div class="text-gray-600">Total URLs</div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <div class="text-3xl font-bold text-blue-600">
            {shortCodes.reduce((sum, sc) => sum + (sc.clickCount || 0), 0)}
          </div>
          <div class="text-gray-600">Total Clicks</div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <div class="text-3xl font-bold text-green-600">
            {shortCodes.filter(sc => (sc.clickCount || 0) > 0).length}
          </div>
          <div class="text-gray-600">Active URLs</div>
        </div>
      </div>

      {/* Short Codes List */}
      <div class="space-y-4">
        {shortCodes.map((shortCode) => (
          <div key={shortCode.id} class="bg-white rounded-lg shadow-md p-6">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Left side - URL info */}
              <div class="flex-1">
                {editingId === shortCode.id ? (
                  <div class="space-y-3">
                    <input
                      type="text"
                      value={editForm.title}
                      onInput={(e) => setEditForm({...editForm, title: (e.target as HTMLInputElement).value})}
                      class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Title"
                    />
                    <input
                      type="url"
                      value={editForm.url}
                      onInput={(e) => setEditForm({...editForm, url: (e.target as HTMLInputElement).value})}
                      class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Destination URL"
                    />
                    <input
                      type="number"
                      value={editForm.redirectTime}
                      onInput={(e) => setEditForm({...editForm, redirectTime: parseInt((e.target as HTMLInputElement).value) || 5})}
                      class="w-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      min="0"
                      max="30"
                    />
                    <span class="text-sm text-gray-500 ml-2">seconds</span>
                  </div>
                ) : (
                  <>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">
                      {shortCode.title}
                    </h3>
                    <div class="flex items-center space-x-2 mb-2">
                      <span class="text-sm text-gray-500">Short URL:</span>
                      <code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                        {globalThis.location?.origin || "https://schrute.me"}/{shortCode.id}
                      </code>
                      <button
                        onClick={() => copyToClipboard(shortCode.id)}
                        class="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-xs"
                      >
                        Copy
                      </button>
                    </div>
                    <div class="text-sm text-gray-600 mb-2">
                      <span class="font-medium">Destination:</span>{" "}
                      <a href={shortCode.url} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
                        {shortCode.url.length > 60 ? shortCode.url.substring(0, 60) + "..." : shortCode.url}
                      </a>
                    </div>
                    <div class="text-sm text-gray-500 space-x-4">
                      <span>Redirect time: {shortCode.redirectTime}s</span>
                      <span>Created: {formatDate(shortCode.createdAt)}</span>
                      {shortCode.lastClickedAt && (
                        <span>Last clicked: {formatDate(shortCode.lastClickedAt)}</span>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Right side - Stats and actions */}
              <div class="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Click stats */}
                <div class="text-center lg:text-right">
                  <div class="text-2xl font-bold text-blue-600">
                    {shortCode.clickCount || 0}
                  </div>
                  <div class="text-sm text-gray-500">clicks</div>
                </div>

                {/* Actions */}
                <div class="flex gap-2">
                  {editingId === shortCode.id ? (
                    <>
                      <button
                        onClick={() => handleSave(shortCode.id)}
                        class="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        class="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 text-sm"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <a
                        href={`/${shortCode.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                      >
                        Visit
                      </a>
                      <button
                        onClick={() => handleEdit(shortCode)}
                        class="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(shortCode.id)}
                        class="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}