import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from 'quill';
import type Delta from 'quill-delta';
import type { Range as RangeStatic } from 'quill';
import 'quill/dist/quill.snow.css';

interface EditorProps {
  readOnly?: boolean;
  defaultValue?: string | { html?: string; text?: string } | Delta;
  onTextChange?: (html: string) => void;
  onSelectionChange?: (range: RangeStatic | null, oldRange: RangeStatic | null) => void;
}

const Editor = forwardRef<Quill, EditorProps>(
  ({ readOnly, defaultValue, onTextChange, onSelectionChange }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      if (ref && typeof ref === 'object' && ref.current) {
        ref.current.enable(!readOnly);
      }
    }, [ref, readOnly]);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const editorContainer = container.appendChild(
        container.ownerDocument.createElement('div')
      );
      const quill = new Quill(editorContainer, {
        theme: 'snow',
      });

      if (ref && typeof ref === 'object') {
        ref.current = quill;
      }

      if (defaultValue) {
        if (typeof defaultValue === 'string') {
          quill.clipboard.dangerouslyPasteHTML(defaultValue);
        } else if ('html' in defaultValue && defaultValue.html) {
          quill.clipboard.dangerouslyPasteHTML(defaultValue.html);
        } else {
          // It's a Delta
          quill.setContents(defaultValue as Delta);
        }
      }

      quill.on('text-change', () => {
        const html = quill.root.innerHTML;
        onTextChangeRef.current?.(html);
      });

      quill.on('selection-change', (range, oldRange) => {
        onSelectionChangeRef.current?.(range, oldRange);
      });

      return () => {
        if (ref && typeof ref === 'object') {
          ref.current = null;
        }
        container.innerHTML = '';
      };
    }, [ref, defaultValue, readOnly]); // Added defaultValue and readOnly to dependencies

    return <div ref={containerRef}></div>;
  }
);

Editor.displayName = 'Editor';

export default Editor;