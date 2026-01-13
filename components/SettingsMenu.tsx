
import React from 'react';
import { X, Palette, Circle, FastForward, Globe, ExternalLink } from 'lucide-react';
import { SiteSettings } from '../types';

interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  settings: SiteSettings;
  setSettings: React.Dispatch<React.SetStateAction<SiteSettings>>;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ isOpen, onClose, settings, setSettings }) => {
  const colors = [
    '#d1305c', '#7c3aed', '#2563eb', '#059669', '#d97706', '#dc2626'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end settings-menu">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-80 h-full bg-white dark:bg-zinc-900 shadow-2xl p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black hand-drawn">Customizer</h2>
          <button onClick={onClose} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full">
            <X size={24} />
          </button>
        </div>

        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4 text-zinc-500 uppercase text-xs font-bold tracking-widest">
              <Palette size={14} /> Your Accent
            </div>
            <div className="flex flex-wrap gap-3">
              {colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSettings(s => ({ ...s, accentColor: color }))}
                  className={`w-10 h-10 rounded-full border-4 transition-transform ${settings.accentColor === color ? 'border-zinc-900 dark:border-white scale-110 shadow-lg' : 'border-transparent hover:scale-105'}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4 text-zinc-500 uppercase text-xs font-bold tracking-widest">
              <Globe size={14} /> For search
            </div>
            <select 
              value={settings.searchEngine}
              onChange={(e) => setSettings(s => ({ ...s, searchEngine: e.target.value }))}
              className="w-full p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg border-none focus:ring-2 focus:ring-[var(--primary-color)]"
            >
              <option value="google">Google</option>
              <option value="duckduckgo">DuckDuckGo</option>
              <option value="bing">Bing</option>
              <option value="brave">Brave</option>
            </select>
            <label className="flex items-center gap-2 mt-4 cursor-pointer">
              <input 
                type="checkbox" 
                checked={settings.openSearchInNewTab}
                onChange={(e) => setSettings(s => ({ ...s, openSearchInNewTab: e.target.checked }))}
                className="w-4 h-4 accent-[var(--primary-color)]"
              />
              <span className="text-sm font-medium">Open in new tab</span>
            </label>
          </section>

          <section className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 hand-drawn text-center italic">
              "Software should feel like yours."
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
